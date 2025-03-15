from app.api.deps import CurrentUser, IsSuperUser, SessionDep
from app.models import Servidor
from fastapi import APIRouter, HTTPException
from sqlmodel import select


router = APIRouter(prefix="/servers", tags=["servers"])

"""
CRUD Routes for Servidor
"""

#! Un cliente solo puede registrar servidores con su id
@router.post("/")
def create_servidor(servidor: Servidor, user: CurrentUser, session: SessionDep) -> Servidor:
    servidor.user_id = user.id
    session.add(servidor)
    session.commit()
    session.refresh(servidor)
    return servidor

#! Un cliente solo puede ver SUS servidores
@router.get("/")
def read_servidores(user: CurrentUser  ,session: SessionDep) -> list[Servidor]:
    if user.is_superuser:
        servidores = session.exec(select(Servidor)).all()
        return servidores
    else:
        servidores = session.exec(select(Servidor).where(Servidor.user_id == user.id)).all()
        return servidores

#! Un cliente solo puede leer un servidor si su id corresponde con el del dueño del servidor
@router.get("/{servidor_id}")
def read_servidor(servidor_id: str, user: CurrentUser, session: SessionDep) -> Servidor:
    servidor = session.get(Servidor, servidor_id)
    
    if not servidor:
        raise HTTPException(status_code=404, detail="Servidor not found")
    
    if not user.is_superuser and servidor.user_id != user.id:
        raise HTTPException(status_code=403, detail="Forbidden")
    
    else:
        return servidor


#! Un cliente solo puede actualizar un servidor si su id corresponde con el del dueño del servidor
@router.put("/{servidor_id}")
def update_servidor(servidor_id: str, user:CurrentUser, servidor: Servidor, session: SessionDep) -> Servidor: 
    db_servidor = session.get(Servidor, servidor_id)
    if not db_servidor:
        raise HTTPException(status_code=404, detail="Servidor not found")
    
    if not user.is_superuser and db_servidor.user_id != user.id:
        raise HTTPException(status_code=403, detail="Forbidden")
    
    else:
        setattr(db_servidor, "nombre", servidor.nombre)
        session.add(db_servidor)
        session.commit()
        session.refresh(db_servidor)
        return db_servidor

#! Un cliente no puede eliminar un servidor
@router.delete("/{servidor_id}")
def delete_servidor(servidor_id: str, _:IsSuperUser, session: SessionDep):
    servidor = session.get(Servidor, servidor_id)
    if not servidor:
        raise HTTPException(status_code=404, detail="Servidor not found")
    session.delete(servidor)
    session.commit()
    return {"ok": True}

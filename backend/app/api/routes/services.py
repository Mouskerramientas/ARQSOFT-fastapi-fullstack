from app.api.deps import CurrentUser, IsSuperUser, SessionDep
from app.models import Servicio
from fastapi import APIRouter, HTTPException
from sqlmodel import select


router = APIRouter(prefix="/services", tags=["services"])

"""
CRUD Routes for Servicio
"""

#! Un cliente solo puede registrar servicios con su id
@router.post("/")
def create_servicio(servicio: Servicio, user: CurrentUser, session: SessionDep) -> Servicio:
    servicio.user_id = user.id
    session.add(servicio)
    session.commit()
    session.refresh(servicio)
    return servicio

#! Un cliente solo puede ver SUS servicios
@router.get("/")
def read_servicios(user: CurrentUser,  session: SessionDep) -> list[Servicio]:
    if user.is_superuser:
        servicios = session.exec(select(Servicio)).all()
        return servicios
    else:
        servicios = session.exec(select(Servicio).where(Servicio.user_id == user.id)).all()
        return servicios

#! Un cliente solo puede leer un servicio si su id corresponde con el del dueño del servicio
@router.get("/{servicio_id}")
def read_servicio(servicio_id: int, user: CurrentUser, session: SessionDep) -> Servicio:
    servicio = session.get(Servicio, servicio_id)
    if not servicio:
        raise HTTPException(status_code=404, detail="Servicio not found")
    
    if not user.is_superuser and servicio.user_id != user.id:
        raise HTTPException(status_code=403, detail="Forbidden")
    
    else:
        return servicio

#! Un cliente solo puede actualizar un servicio si su id corresponde con el del dueño del servicio
@router.put("/{servicio_id}")
def update_servicio(servicio_id: int, user: CurrentUser, servicio: Servicio, session: SessionDep) -> Servicio:
    db_servicio = session.get(Servicio, servicio_id)
    if not db_servicio:
        raise HTTPException(status_code=404, detail="Servicio not found")
    
    if not user.is_superuser and db_servicio.user_id != user.id:
        raise HTTPException(status_code=403, detail="Forbidden")
    
    else:
        setattr(db_servicio, "nombre", servicio.nombre)
        setattr(db_servicio, "descripcion", servicio.descripcion)
        session.add(db_servicio)
        session.commit()
        session.refresh(db_servicio)
        return db_servicio

#! Un cliente no puede eliminar un servicio
@router.delete("/{servicio_id}")
def delete_servicio(servicio_id: int, _: IsSuperUser, session: SessionDep):
    servicio = session.get(Servicio, servicio_id)
    if not servicio:
        raise HTTPException(status_code=404, detail="Servicio not found")
    session.delete(servicio)
    session.commit()
    return {"ok": True}

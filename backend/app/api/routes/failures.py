from app.api.deps import CurrentUser, IsSuperUser, SessionDep
from app.models import Failure
from fastapi import APIRouter, HTTPException
from sqlmodel import select


router = APIRouter(prefix="/failures", tags=["failures"])


"""
CRUD Routes for Failure
"""

@router.post("/")
def create_failure(failure: Failure, _:IsSuperUser, session: SessionDep) -> Failure:
    session.add(failure)
    session.commit()
    session.refresh(failure)
    return failure

@router.get("/")
def read_failures(user: CurrentUser, session: SessionDep) -> list[Failure]:
    if user.is_superuser:
        failures = session.exec(select(Failure)).all()
        return failures
    else:
        failures = session.exec(select(Failure).where(Failure.user_id == user.id)).all()
        return failures

@router.get("/{failure_id}")
def read_failure(failure_id: str, user:CurrentUser, session: SessionDep) -> Failure:
    failure = session.get(Failure, failure_id)
    if not failure:
        raise HTTPException(status_code=404, detail="Failure not found")
    if not user.is_superuser and failure.user_id != user.id:
        raise HTTPException(status_code=403, detail="Forbidden")
    else:
        return failure

#! El método PUT no está permitido
# @router.put("/failures/{failure_id}")
# def update_failure(failure_id: str, _:Annotated[dict, Depends(decode_token)], failure: Failure, session: SessionDep) -> Failure:
#     db_failure = session.get(Failure, failure_id)
#     if not db_failure:
#         raise HTTPException(status_code=404, detail="Failure not found")
#     setattr(db_failure, "nombre", failure.nombre)
#     setattr(db_failure, "descripcion", failure.descripcion)
#     session.add(db_failure)
#     session.commit()
#     session.refresh(db_failure)
#     return db_failure

#! El método DELETE no está permitido
# @router.delete("/failures/{failure_id}")
# def delete_failure(failure_id: str, _:Annotated[dict, Depends(decode_token)], session: SessionDep):
#     failure = session.get(Failure, failure_id)
#     if not failure:
#         raise HTTPException(status_code=404, detail="Failure not found")
#     session.delete(failure)
#     session.commit()
#     return {"ok": True}

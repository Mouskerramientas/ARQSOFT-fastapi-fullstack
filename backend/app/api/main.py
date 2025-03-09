from fastapi import APIRouter

from app.api.routes import failures, items, login, private, servers, users, utils, services
from app.core.config import settings

api_router = APIRouter()
api_router.include_router(login.router)
api_router.include_router(users.router)
api_router.include_router(utils.router)
# api_router.include_router(items.router)
api_router.include_router(services.router)
api_router.include_router(servers.router)
api_router.include_router(failures.router)


if settings.ENVIRONMENT == "local":
    api_router.include_router(private.router)

from fastapi import APIRouter, FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


class Card(BaseModel):
    id: int
    title: str
    description: str


def create_app() -> FastAPI:
    users = APIRouter(prefix="/user")

    @users.get(
        "/profile",
        summary="Profile endpoint",
    )
    def profile():
        return {"message": "User profile"}

    app = FastAPI(
        title="FastAPI App",
        version="0.1.0",
        description="A simple FastAPI application for testing purposes",
        docs_url="/docs",  # Swagger UI at /docs
        redoc_url="/redoc",  # ReDoc at /redoc
    )

    # Add CORS middleware
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],  # Vite dev server
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    @app.post(
        "/card",
        summary="Card endpoint",
        description="Returns a card",
        response_description="A card",
    )
    async def get_card(request: Request) -> Card:
        """Get a card."""
        data = await request.json()
        _id = data.get("id")
        return Card(
            id=_id,
            title=f"Card {_id}",
            description=f"Card {_id} description",
        )

    return app

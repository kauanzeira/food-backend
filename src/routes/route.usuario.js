import { Router } from "express";
import UsuarioController from "../controllers/controller.usuario.js";

const routeUsuario = Router();

routeUsuario.get("/usuario", UsuarioController.getAllUsuarios);

export default routeUsuario;
import { Module, Modules } from "@medusajs/framework/utils";
import CloudinaryService from "./service";

export default Module(Modules.FILE, {
  service: CloudinaryService,
});

import { createOpenApiHttp } from "openapi-msw";

import { ApiPaths } from "../schema";
import { CONFIG } from "@/shared/config";

export const http = createOpenApiHttp<ApiPaths>({
  baseUrl: CONFIG.API_BASE_URL,
});
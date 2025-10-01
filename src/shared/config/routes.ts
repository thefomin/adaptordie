import "react-router-dom";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  COURSES: "/courses",
  COURSE: "/course/:courseId",
} as const;

export type PathParams = {
  [ROUTES.COURSE]: {
    courseId: string;
  };
};

declare module "react-router-dom" {
  interface Register {
    params: PathParams;
  }
}
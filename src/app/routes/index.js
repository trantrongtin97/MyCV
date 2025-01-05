import routesConfig from "../configs/route";
import Profile from "../pages/profile";
import ProfessionalSummary from "../pages/pfs";
import Education from "../pages/education";

const publicRoutes = [
    {path : routesConfig.profile, component : Profile},
    {path : routesConfig.professionalSummary, component : ProfessionalSummary},
    {path : routesConfig.education, component : Education}
]; // cac router ko can dang nhap van vao dc

const privateRoutes = [
    
]; // cac router phai dang nhap van vao dc

export {publicRoutes, privateRoutes} 
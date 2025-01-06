import routesConfig from "../configs/route";
import Profile from "../pages/profile";
import ProfessionalSummary from "../pages/pfs";
import Education from "../pages/education";
import WorkExperience from "../pages/workexp/work-exp";

const publicRoutes = [
    {path : routesConfig.profile, component : Profile},
    {path : routesConfig.professionalSummary, component : ProfessionalSummary},
    {path : routesConfig.education, component : Education},
    {path : routesConfig.workexperience, component : WorkExperience}
]; // cac router ko can dang nhap van vao dc

const privateRoutes = [
    
]; // cac router phai dang nhap van vao dc

export {publicRoutes, privateRoutes} 
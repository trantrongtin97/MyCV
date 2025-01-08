import routesConfig from "../configs/route";
import Profile from "../pages/profile";
import ProfessionalSummary from "../pages/pfs";
import Education from "../pages/education";
import WorkExperience from "../pages/work-exp";
import TechnologyAndSkills from "../pages/tech";
import Projects from "../pages/projects";

const publicRoutes = [
    {path : routesConfig.profile, component : Profile},
    {path : routesConfig.professionalSummary, component : ProfessionalSummary},
    {path : routesConfig.education, component : Education},
    {path : routesConfig.workexperience, component : WorkExperience},
    {path : routesConfig.technology, component : TechnologyAndSkills},
    {path : routesConfig.projects, component : Projects},
]; // cac router ko can dang nhap van vao dc

const privateRoutes = [
    
]; // cac router phai dang nhap van vao dc

export {publicRoutes, privateRoutes} 
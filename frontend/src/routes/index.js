import HomePage from "views/HomePage/HomePage";
import ArticlePage from "views/ArticlePage/ArticlePage";
import AboutPage from "views/AboutPage/AboutPage";

var indexRoutes = [
  { path: "/about", name: "AboutPage", component: AboutPage },
  { path: "/article/:article", name: "Article", component: ArticlePage },
  { path: "/", name: "HomePage", component: HomePage }
];

export default indexRoutes;
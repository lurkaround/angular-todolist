import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TodosComponent } from "./components/todos/todos.component";
import { AboutComponent } from "./components/pages/about/about.component";

const appRoutes: Routes = [
  {
    path: "",
    component: TodosComponent
  },
  {
    path: "about",
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

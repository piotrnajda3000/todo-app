import { storageModule } from "./modules/storage";
import "./style.css";
import UI from "./modules/UI";

// localStorage.removeItem("storageLS");
// localStorage.clear();

if (!localStorage.getItem("storageLS")) {
  storageModule.populate();
}

UI.display.todosOf("Inbox", "list");

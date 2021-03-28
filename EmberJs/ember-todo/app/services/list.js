import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class ListService extends Service {
    @tracked itemsList = [];

    addItem(item) {
        this.itemsList = [...this.itemsList, item];
        console.log(this.itemsList);
    }
    removeItem(itemName) {
        this.itemsList = this.itemsList.filter(item => item !== itemName);
    }
}

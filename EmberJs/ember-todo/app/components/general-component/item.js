import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class GeneralComponentItemComponent extends Component {
    @service('list') todoservice;
    @action
    deleteItem(itemValue) {
        console.log(itemValue, "delete this item");
        this.todoservice.removeItem(itemValue);
    }

}

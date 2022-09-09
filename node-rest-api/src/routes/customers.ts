import {Request, Response} from "express";
import { CustomerController } from "../controllers/customers";

export class Routes {
    public customerController: CustomerController = new CustomerController();

    public routes(app): void {
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        
        app.route('/customer').get(this.customerController.getCustomers);

        app.route('/customer/create').post(this.customerController.addNewCustomer);
        
        app.route('/customer/update/:customerId').put(this.customerController.updateCustomer);

        app.route('/customer/:customerId')
        .get(this.customerController.getCustomerWithID)
        .delete(this.customerController.deleteCustomer);
    }
    
}
const axios = require("axios");

class PaymentService {
   
    async createPayment(req) {     

      const items = req.body.products.map(product=>{

        return {          
          "title": product.product.title,
          "description": product.product.description,
          //"picture_url": "http://www.myapp.com/myimage.jpg",
          //"category_id": "car_electronics",
          "quantity": product.amount,
          "currency_id": "ARS",          
          "unit_price": product.product.price.originalprice
        }       

      }) 
        const url = "https://api.mercadopago.com/checkout/preferences";

        const body = {
            payer_email: "test_user46945293@testuser.com",            
            "items": items,
              "payer": {
                "phone": {},
                "identification": {},
                "address": {}
              },
              "payment_methods": {
                "excluded_payment_methods": [
                  {}
                ],
                "excluded_payment_types": [
                  {}
                ]
              },
              "shipments": {
                "free_methods": [
                  {}
                ],
                "receiver_address": {}
              },
              "back_urls": {                
              //"success": "http://localhost:3000"				                        
               "success": "https://pf-ecommerce-ebon.vercel.app",			         
               //"success": "https://pf-ecommerce-ebon.vercel.app",
              "failure": "https://pf-ecommerce-ebon.vercel.app",
              "pending": "https://pf-ecommerce-ebon.vercel.app"				         
               //"pending": "http://localhost:3000"				                        
              },              
          		"auto_return": "approved",
              "differential_pricing": {},
              "metadata": {}             
        };

        const payment = await axios.post(url, body, {
            headers: {
                "Content-Type": "applitacion/json",
                Authorization: `Bearer APP_USR-166065288313414-082412-282935deec413ed4621b1a2a1d4a46b9-1185509743`
            }
        });

        return payment;
    }
}

module.exports = PaymentService
    
    
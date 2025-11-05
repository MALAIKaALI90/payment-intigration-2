import Stripe from "stripe"
import express from "express"
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();

const app = express()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

app.use(cors({ origin:process.env.FRONTEND_URI}))
app.use(express.json())
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});
app.post("/create-checkout-sessions",async (req,res)=>{
    try {
        const {product}=req.body; //name image price
        const session=await stripe.checkout.sessions.create({
            payment_method_types:["card"],
            line_items:[{
                price_data:{
                    currency:"usd",
                    product_data:{
                        name:product.name,
                        images:[product.image]
                    },
                    unit_amount:product.price *100
                },
                quantity:1
            }],
            mode:"payment",
            success_url:`${process.env.FRONTEND_URI}/success`,
            cancel_url:`${process.env.FRONTEND_URI}/cancel`,


        })
            res.json({url:session.url})

    } catch (error) {
        res.status(500).json({error:error.message})
    }
})
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`);
    
})
export default app


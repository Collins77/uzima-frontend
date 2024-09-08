import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const ChosenPlan = () => {
    const location = useLocation();
    const { plan } = location.state;
    const pricetopay = parseInt(plan.price,10);
    const user = useSelector((state) => state.auth.user);
    const userId = user._id;
    const [phone,setPhone] = useState('');
    const [loading,setLoading] = useState(false);

    const handlePay = async(e)=>{
        e.preventDefault()
        setLoading(true);
        const form = {
            MerchantCode:"600980",
            NetworkCode:"63902",
            PhoneNumber:phone,
            TransactionDesc:"billing",
            Currency:"KES",
            AccountReference:'254112163919',
            Amount:plan.price,
            userId:userId,
            planid:plan._id
        }
        try {
            const response = await axios.post("https://uzima-backe.vercel.app/api/payment/requestpayment",form);
            const checkoutid = response.data.CheckoutRequestID;
            console.log("checkout",checkoutid);
            setLoading(false);

            
        } catch (error) {
            console.log("error requesting payment",error)
            
        }

    }

    return (
        <div className="container w-full sm:px-16 px-6 sm:py-16 py-6">
            <h1>{plan.title}</h1>
            <p>price:{plan.price}</p>
            <p>{plan._id}</p>
            <p>userid:{userId}</p>
            {/* <ul>
                {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul> */}
            <form action="" onSubmit={handlePay} className="flex flex-col">
                <input
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                type="text" placeholder='enter paying phone number' className="h-12 w-60 border border-slate-400 px-4 rounded-md my-4" />
                <button type='submit' className="h-12 w-60 rounded-md bg-black text-white">Pay</button>
            </form>
        </div>
    );
};

export default ChosenPlan;

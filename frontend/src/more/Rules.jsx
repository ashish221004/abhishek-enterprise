import React, { useEffect, useState } from 'react'
import "./Rules.css";
import Header from '../component/Home/Header';
import BottomTab from './BottomTab';
import MetaData from './Metadata';
import Footer from '../Footer';
import FAQ from "./FAQ";

const Rules = () => {
    const faq=[
            {
              "id": 1,
              "question": "What is Abhishek Enterprises?",
              "answer": "Abhishek Enterprises is a leading company providing high-quality products and services in various industries. We focus on customer satisfaction and innovation."
            },
            {
              "id": 2,
              "question": "How do I place an order with Abhishek Enterprises?",
              "answer": "To place an order, visit our website or contact our sales team. You can browse our catalog, select the desired products, and proceed with the order form or reach out directly to our representatives."
            },
            {
              "id": 3,
              "question": "What products does Abhishek Enterprises offer?",
              "answer": "We offer a wide range of products across industries such as [mention key industries], including [list of some popular product categories]. For a full catalog, please visit our website."
            },
            {
              "id": 4,
              "question": "How do I track my order status?",
              "answer": "Once your order is confirmed, you will receive an order ID via email or SMS. You can track your order status using the order tracking feature on our website or by contacting our support team."
            },
            {
              "id": 5,
              "question": "How can I contact customer support?",
              "answer": "Our customer support team is available 24/7. You can reach us by email at [support@abhishekenterprises.com], call us at [phone number], or use the live chat feature on our website for instant assistance."
            },
            {
              "id": 6,
              "question": "Can I request a refund or exchange?",
              "answer": "Yes, we offer a refund or exchange policy for eligible products within [X] days from the purchase date. Please refer to our returns and exchanges policy on our website for more details."
            },    
      ]
    const [data, setData] = useState([]);
    const [activeId, setActiveId] = useState(false);
  
    useEffect(() => {
      setData(faq);
    }, []);
    console.log(data);
    const handleButton = (id) => {
      setActiveId((prevId) => (prevId === id ? false : id));
      console.log(activeId);
    };
    return (
        <>
        <MetaData title="Rules" />
        <Header />
        <div>
      <ul className="section-accordion">
        {data.map((element) => {
          return (
            <FAQ
              key={element.id}
              curData={element}
              isActive={activeId === element.id}
              onToggle={() => handleButton(element.id)}
            />
          );
        })}
      </ul>
    </div>
        <Footer />
        <BottomTab />
        </>
    )
}

export default Rules

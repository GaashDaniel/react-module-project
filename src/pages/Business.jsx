import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBusinessById } from "../services/cardsCrud";
import BusinessFlyer from "../components/BusinessFlyer";

function Business({ user }) {
    const { businessId } = useParams();
    const [business, setBusiness] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        void async function fetchBusiness() {
            const business = await getBusinessById(businessId);
            setBusiness(business);
            setIsLoading(false);
        }();
    }, []);

    return (
        <div data-page="business">
            <BusinessFlyer {...{ user, business, setBusiness }} />
        </div>
    );
};

export default Business;
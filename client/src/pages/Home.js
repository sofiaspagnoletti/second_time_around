import React from "react";
import CardWrapper from "../components/CardWrapper";
import ItemsDonated from "../components/ItemsDonated";
import ShippingHelp from "../components/ShippingHelp";
import HurryUpMsg from "../components/HurryUpMsg";

function Home() {
    return (
        <div>
            <HurryUpMsg/>
            <CardWrapper>
                <ItemsDonated />
            </CardWrapper>
            <ShippingHelp/>
        </div>
    );
}

export default Home;
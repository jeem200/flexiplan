import { useState } from "react";
import BubbleCircle from "./bubble-circle";
import BubbleMap from "./data/bubble-map.json";
import SelectedBubble from "./data/selected-bubbles.json";
import CriteriaMap from "./data/eligibility-map.json";
const Dict = {
    longevity: { text: "Validity", unit: "Days" },
    voice: { text: "Minutes", unit: "Minutes" },
    sms: { text: "SMS", unit: "SMS" },
    bioscope: { text: "Bioscope", unit: "GB" },
    fourg: { text: "4G Internet", unit: "GB" },
    mca: { text: "MCA", unit: "GB" },
    data: { text: "Regular Internet", unit: "GB" },
};

const Plan = () => {
    const [plan, setPlan] = useState(
        Object.entries(BubbleMap).map(([key, value]) => ({
            key,
            value,
            text: Dict[key]?.text || key,
            unit: Dict[key]?.unit || "",
        }))
    );

    const [selected, setSelected] = useState(SelectedBubble);

    const [selectedDay, setSelectedDay] = useState("day_3");

    const criteriaForDay = CriteriaMap[selectedDay] || {};

    return (
        <>
            {plan.map(({ key, text, unit, value }) => (
                <div className="flex-container plan-container" key={key}>
                    <div className="plan-label">
                        <h3>{text}</h3>
                        <span>
                            {selected[key] && selected[key] >= 1024 && unit === "GB"
                                ? `${selected[key] / 1024}`
                                : selected[key]}{" "}
                            {unit}
                        </span>
                    </div>
                    <div className="bubble-container">
                        {value.map((bblItem) => { 
                            const isDisabled =criteriaForDay[key] && !criteriaForDay[key].includes(bblItem);
                           
                            return (
                                
                                <BubbleCircle
                                    key={bblItem}
                                    bblItem={bblItem}
                                    unit={unit}
                                    isSelected={selected[key] === bblItem}
                                    isDisabled={isDisabled}
                                    onClick={() =>{
                                        setSelected((prev) => ({...prev,[key]: bblItem}))
                                        if(key=='longevity'){
                                            setSelectedDay(`day_${bblItem}`)
                                        }

                                    }}
                                />
                        )})}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Plan;

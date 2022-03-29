import { ChangeEventHandler, useState } from "react";

// WOTD = Word Of The Day
// TR = Training
// R = Rapid
export type ModeType = 'WOTD' | 'TR' | 'R';

type ModeProps = {
    handleMode: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Mode: React.FC<ModeProps> = (props: ModeProps) => {

    return (
        <div className="Mode">
            <select className="mode-select" onChange={props.handleMode}>
                <option value="WOTD">Word of the day</option>
                <option value="TR">Training</option>
                <option value="R">Rapid</option>
            </select>
        </div>
    );
}

import React, { useState } from 'react';

const LegalTerm = ({ term, definition }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <span
            className="relative inline-block border-b-2 border-dotted border-orange-400 cursor-help group"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            {term}
            {showTooltip && (
                <div className="absolute bottom-full left-0 mb-2 w-64 p-3 bg-slate-800 text-white text-xs rounded shadow-lg z-50 border border-slate-600">
                    <div className="font-bold mb-1 capitalize text-orange-400">{term}</div>
                    {definition}
                    <div className="absolute top-full left-4 border-4 border-transparent border-t-slate-800"></div>
                </div>
            )}
        </span>
    );
};

export default LegalTerm;

import React, { useState } from 'react';
import { BookOpen, PlusCircle, History, ChevronLeft, ChevronRight, Scale, ChevronDown, FileText } from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar, currentMode, setMode, sessions, currentSessionId, setCurrentSessionId, startNewChat, openKnowledgeBrowser, openDocumentDrafter }) => {
    const [historyOpen, setHistoryOpen] = useState(true);

    return (
        <div className={`fixed left-0 top-0 h-full bg-slate-900 border-r border-slate-800 transition-all duration-300 z-20 ${isOpen ? 'w-64' : 'w-16'}`}>
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
                {isOpen && <div className="flex items-center gap-2 font-bold text-orange-500"><Scale size={20} /> <span>NyayaSahayak</span></div>}
                <button onClick={toggleSidebar} className="p-1 hover:bg-slate-800 rounded text-slate-400">
                    {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                </button>
            </div>

            <div className="flex flex-col h-[calc(100%-60px)]">
                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    <button
                        onClick={startNewChat}
                        className="w-full flex items-center gap-3 px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-all shadow-lg shadow-orange-500/20 group"
                    >
                        <PlusCircle size={20} className="group-hover:rotate-90 transition-transform" />
                        {isOpen && <span className="font-semibold">New Case File</span>}
                    </button>

                    <div className="pt-4 pb-2">
                        {isOpen && <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Legal Tools</p>}
                        <button
                            onClick={openKnowledgeBrowser}
                            className="w-full flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white rounded-xl transition-colors"
                        >
                            <BookOpen size={20} className="text-indigo-400" />
                            {isOpen && <span>Official Gazette</span>}
                        </button>
                        <button
                            onClick={openDocumentDrafter}
                            className="w-full flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white rounded-xl transition-colors"
                        >
                            <FileText size={20} className="text-emerald-400" />
                            {isOpen && <span>Draft Document</span>}
                        </button>
                    </div>

                    <div className="pt-4">
                        <div
                            className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-slate-800 rounded-lg transition-colors"
                            onClick={() => setHistoryOpen(!historyOpen)}
                        >
                            {isOpen && <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Recent Cases</p>}
                            {isOpen && (historyOpen ? <ChevronDown size={14} className="text-slate-500" /> : <ChevronRight size={14} className="text-slate-500" />)}
                        </div>

                        {historyOpen && isOpen && (
                            <div className="mt-2 space-y-1">
                                {sessions.map(session => (
                                    <button
                                        key={session.id}
                                        onClick={() => setCurrentSessionId(session.id)}
                                        className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-colors truncate ${currentSessionId === session.id
                                                ? 'bg-slate-800 text-orange-400 border-l-2 border-orange-500'
                                                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                                            }`}
                                    >
                                        {session.title}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <div className="flex items-center gap-3 px-4 py-2 text-slate-400 text-sm">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        {isOpen && <span>System Online</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

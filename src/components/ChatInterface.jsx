import React, { useEffect, useRef, useState } from 'react';
import { Send, User, Bot, Loader2 } from 'lucide-react';
import LegalTerm from './LegalTerm';
import { LEGAL_TERMS } from '../data/legalDictionary';

const ChatInterface = ({ history, onSendMessage, isTyping }) => {
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [history, isTyping]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onSendMessage(input);
            setInput('');
        }
    };

    // Helper to parse text for links and legal terms
    const renderMessageContent = (text) => {
        // 1. Split by markdown links first: [text](url)
        const parts = text.split(/(\[.*?\]\(.*?\))/g);

        return parts.map((part, i) => {
            const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
            if (linkMatch) {
                return (
                    <a
                        key={i}
                        href={linkMatch[2]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-400 hover:text-orange-300 underline underline-offset-4"
                    >
                        {linkMatch[1]}
                    </a>
                );
            }

            // 2. For non-link text, split by legal terms
            const words = part.split(/(\b)/); // Split by word boundaries to keep punctuation
            return words.map((word, j) => {
                const lowerWord = word.toLowerCase();
                if (LEGAL_TERMS[lowerWord]) {
                    return <LegalTerm key={`${i}-${j}`} term={word} definition={LEGAL_TERMS[lowerWord]} />;
                }
                return word;
            });
        });
    };

    return (
        <div className="flex flex-col h-full bg-slate-900">
            <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
                {history.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-slate-500 opacity-50">
                        <Bot size={64} className="mb-4" />
                        <p className="text-lg">NyayaSahayak AI Ready</p>
                    </div>
                )}

                {history.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[80%] rounded-2xl p-4 shadow-lg ${msg.role === 'user'
                                    ? 'bg-indigo-600 text-white rounded-br-none'
                                    : 'bg-slate-800 text-slate-100 rounded-bl-none border border-slate-700'
                                }`}
                        >
                            <div className="flex items-center gap-2 mb-2 opacity-70 text-xs uppercase tracking-wider font-bold">
                                {msg.role === 'user' ? <User size={12} /> : <Bot size={12} />}
                                {msg.role === 'user' ? 'You' : 'NyayaSahayak AI'}
                            </div>

                            {msg.contextUsed && (
                                <div className="mb-2 inline-block bg-orange-500/10 text-orange-400 text-[10px] px-2 py-1 rounded border border-orange-500/20">
                                    CONTEXT ACTIVE
                                </div>
                            )}

                            <div className="whitespace-pre-wrap leading-relaxed">
                                {renderMessageContent(msg.content)}
                            </div>
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-slate-800 rounded-2xl p-4 rounded-bl-none border border-slate-700 shadow-lg">
                            <div className="flex items-center gap-2">
                                <Bot size={14} className="text-orange-400" />
                                <div className="flex gap-1">
                                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></span>
                                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-100"></span>
                                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-200"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-slate-800 border-t border-slate-700">
                <form onSubmit={handleSubmit} className="relative max-w-4xl mx-auto">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask a legal question..."
                        className="w-full bg-slate-900 text-white rounded-xl pl-4 pr-12 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50 border border-slate-700 placeholder-slate-500 shadow-inner"
                    />
                    <button
                        type="submit"
                        disabled={!input.trim() || isTyping}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:hover:bg-orange-500 transition-colors"
                    >
                        {isTyping ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                    </button>
                </form>
                <div className="text-center mt-2 text-xs text-slate-500">
                    AI can make mistakes. Please verify important legal information.
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;

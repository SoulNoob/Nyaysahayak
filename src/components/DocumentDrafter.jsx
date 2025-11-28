import React, { useState } from 'react';
import { DOCUMENT_TEMPLATES } from '../data/documentTemplates';
import { FileText, Printer, ArrowLeft } from 'lucide-react';

const DocumentDrafter = ({ onBack }) => {
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [formData, setFormData] = useState({});
    const [previewMode, setPreviewMode] = useState(false);

    const handleTemplateSelect = (template) => {
        setSelectedTemplate(template);
        setFormData({});
        setPreviewMode(false);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePrint = () => {
        const printContent = document.getElementById('document-preview').innerHTML;
        const win = window.open('', '', 'height=700,width=700');
        win.document.write('<html><head><title>Document Print</title>');
        win.document.write('<style>body { font-family: serif; padding: 40px; line-height: 1.6; white-space: pre-wrap; }</style>');
        win.document.write('</head><body>');
        win.document.write(printContent);
        win.document.write('</body></html>');
        win.document.close();
        win.print();
    };

    if (previewMode && selectedTemplate) {
        return (
            <div className="flex flex-col h-full bg-slate-900 text-slate-100 p-6 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <button onClick={() => setPreviewMode(false)} className="flex items-center text-slate-400 hover:text-white">
                        <ArrowLeft size={20} className="mr-2" /> Edit Details
                    </button>
                    <button onClick={handlePrint} className="flex items-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                        <Printer size={20} className="mr-2" /> Print Document
                    </button>
                </div>

                <div className="bg-white text-black p-10 rounded shadow-lg max-w-3xl mx-auto w-full min-h-[600px]">
                    <div id="document-preview" className="whitespace-pre-wrap font-serif text-lg">
                        {selectedTemplate.generate(formData)}
                    </div>
                </div>
            </div>
        );
    }

    if (selectedTemplate) {
        return (
            <div className="flex flex-col h-full bg-slate-900 text-slate-100 p-6 overflow-y-auto">
                <button onClick={() => setSelectedTemplate(null)} className="flex items-center text-slate-400 hover:text-white mb-6 w-fit">
                    <ArrowLeft size={20} className="mr-2" /> Back to Templates
                </button>

                <h2 className="text-2xl font-bold mb-2 text-orange-400">{selectedTemplate.name}</h2>
                <p className="text-slate-400 mb-8">{selectedTemplate.description}</p>

                <div className="max-w-2xl mx-auto w-full bg-slate-800 p-8 rounded-xl border border-slate-700">
                    <div className="space-y-6">
                        {selectedTemplate.fields.map((field) => (
                            <div key={field.name}>
                                <label className="block text-sm font-medium text-slate-300 mb-2">{field.label}</label>
                                {field.type === 'textarea' ? (
                                    <textarea
                                        name={field.name}
                                        value={formData[field.name] || ''}
                                        onChange={handleInputChange}
                                        className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none h-32"
                                        placeholder={field.placeholder || ''}
                                    />
                                ) : (
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        value={formData[field.name] || ''}
                                        onChange={handleInputChange}
                                        className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                        placeholder={field.placeholder || ''}
                                    />
                                )}
                            </div>
                        ))}

                        <button
                            onClick={() => setPreviewMode(true)}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition-colors mt-4"
                        >
                            Generate Preview
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-slate-900 text-slate-100 p-8 overflow-y-auto">
            <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-indigo-400">Legal Document Drafter</h1>
            <p className="text-slate-400 mb-8">Select a template to auto-generate legal documents.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {DOCUMENT_TEMPLATES.map((template) => (
                    <div
                        key={template.id}
                        onClick={() => handleTemplateSelect(template)}
                        className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 cursor-pointer transition-all hover:shadow-lg hover:shadow-orange-500/10 group"
                    >
                        <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/20 group-hover:text-orange-400 transition-colors">
                            <FileText size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{template.name}</h3>
                        <p className="text-slate-400 text-sm">{template.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DocumentDrafter;

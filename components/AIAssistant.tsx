import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2, Mic } from 'lucide-react';
import { getAI, SYSTEM_INSTRUCTION } from '../services/gemini';
import { ChatMessage } from '../types';
import { Button } from './Button';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Hallo! Ich bin Tim, Ihr Karriere-Assistent für Haustechnik. Suchen Sie einen Job, Gehaltsinfos oder Tipps zur Weiterbildung?',
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Construct history for context
      // Note: In a real app, we would manage token limits carefully
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const aiClient = getAI();
      if (!aiClient) {
        throw new Error('KI-Assistent ist derzeit nicht verfügbar.');
      }

      const chat = aiClient.chats.create({
        model: 'gemini-2.5-flash',
        config: { systemInstruction: SYSTEM_INSTRUCTION },
        history: history
      });

      const result = await chat.sendMessage({ message: userMessage.text });
      const responseText = result.text;

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Gemini Error:", error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: 'Entschuldigung, ich habe gerade Verbindungsprobleme. Bitte versuchen Sie es gleich noch einmal.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-brand-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-brand-700 transition-all hover:scale-105"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="font-medium hidden md:inline">Karriere-Coach fragen</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 animate-in fade-in slide-in-from-bottom-10 duration-300">

          {/* Header */}
          <div className="bg-brand-900 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-brand-700 p-2 rounded-full">
                <Bot className="w-5 h-5 text-accent-500" />
              </div>
              <div>
                <h3 className="font-bold">Technik-Tim</h3>
                <p className="text-xs text-brand-200">KI-Experte für Haustechnik</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-brand-200 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${msg.role === 'user'
                    ? 'bg-brand-600 text-white rounded-tr-none'
                    : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                    }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-brand-600" />
                  <span className="text-xs text-slate-500">Tim tippt...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100 rounded-b-2xl">
            <div className="flex gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Stellen Sie Ihre Frage..."
                className="flex-1 resize-none border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent h-[44px] max-h-[100px]"
              />
              <Button
                onClick={handleSendMessage}
                disabled={isLoading || !input.trim()}
                className="w-12 h-[44px] p-0 flex items-center justify-center rounded-lg"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
            <div className="text-center mt-2">
              <span className="text-[10px] text-slate-400">Powered by Google Gemini</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
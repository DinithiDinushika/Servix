import { useState, useEffect } from "react";

export default function LoginModal({ onClose, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (!username || !password) { setError("Please fill in all fields."); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setLoading(false);
    onLogin({ username });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center px-4"
      style={{ background: "rgba(1, 10, 28, 0.65)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        className="w-full max-w-[400px] border border-blue-900/40 rounded-2xl p-7 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)] animate-fade-up relative"
        style={{ background: "linear-gradient(123.93deg, #001950 0.94%, #002E93 100.24%)" }}
      >
        {/* Absolute Positioned Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all duration-200 cursor-pointer"
          aria-label="Close modal"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Header Title */}
        <h2 className="text-xl font-bold text-white mb-6 tracking-wide">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* User Name Input Group */}
          <div>
            <label className="block text-white text-sm font-light mb-2 tracking-wide">
              User Name
            </label>
            <input
              type="text"
              placeholder="UserName"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full bg-[#f7f8fa] text-gray-800 placeholder-gray-400 text-sm rounded-lg px-4 py-3 outline-none border border-transparent font-medium"
            />
          </div>

          {/* ID Input Group */}
          <div>
            <label className="block text-white text-sm font-light mb-2 tracking-wide">
              ID
            </label>
            <input
              type="password"
              placeholder="**********"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-[#f7f8fa] text-gray-800 placeholder-gray-400 text-sm rounded-lg px-4 py-3 outline-none border border-transparent font-medium"
            />
          </div>

          {error && <p className="text-red-400 text-xs font-medium pt-1">{error}</p>}

          {/* Login Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#0b5cff] hover:bg-[#004ce6] disabled:bg-blue-800/50 text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Login
                  <svg className="w-4 h-4 translate-y-[0.5px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
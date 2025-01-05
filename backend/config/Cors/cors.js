const allowlist = [process.env.CLIENT_URL, "http://localhost:5174"];
export const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowlist.includes(origin)) {
      callback(null, true);
    } else {
      console.error("Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  exposedHeaders: ["WWW-Authenticate"],
};

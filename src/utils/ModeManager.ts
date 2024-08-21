class ModeManager {
  private static mode: "Pomodoro" | "Short Break" | "Long Break" = "Pomodoro"; // Default mode

  static setMode(newMode: "Pomodoro" | "Short Break" | "Long Break") {
    this.mode = newMode;
  }

  static getMode(): "Pomodoro" | "Short Break" | "Long Break" {
    return this.mode;
  }
}

export default ModeManager;

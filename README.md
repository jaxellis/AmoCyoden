# Amocyoden Theme 🌌

**AMOLED-Optimized | Cyan Accents**

<div align="center" style="padding: 10px; background-color: #FFF3CD; border-radius: 5px; border: 1px solid #FFEBA3;">
  <strong>🚧 Unfinished Theme!</strong> This theme is under active development. Expect frequent updates and changes! 🚧
</div>

![Amocyoden Theme Preview](screenshot.png) <!-- Add Screenshot on Release -->

---

## Key Features ✨

- **Ultra-Deep AMOLED Black:** A true (`#000000`) background that delivers pure blacks, reduces eye strain, and conserves power.
- **Signature Cyan Accents:** Distinctive cyan touches that add a sleek, modern flair to the interface.

---

## Installation 🚀

### Via VS Code Marketplace

1. Open **Extensions** in VS Code (`Ctrl+Shift+X` / `Cmd+Shift+X`).
2. Search for **"Amocyoden"**.
3. Click **Install**.
4. Activate the theme:
   - `Ctrl+Shift+P` / `Cmd+Shift+P` > **Preferences: Color Theme** > Select **Amocyoden**.

### Manual Installation (VSIX)

1. Download the latest `.vsix` file from [Releases](https://github.com/jaxellis/amocyoden/releases).
2. Run in VS Code:
   ```bash
   code --install-extension amocyoden-0.1.0.vsix
   ```

---

## Customization 🎨

Override specific colors by editing your `settings.json`:

```json
{
	"workbench.colorCustomizations": {
		"[Amocyoden]": {
			"editor.background": "#000000",
			"statusBar.background": "#121212",
			"terminal.ansiCyan": "#00ffff"
		}
	}
}
```

---

## Development 🛠️

To modify the theme locally:

1. Clone the repo:

   ```bash
   git clone https://github.com/jaxellis/amocyoden.git
   ```

2. Open the project in VS Code and press `F5` to launch the debugger.
3. Edit `themes/amocyoden-color-theme.json` and reload the debug window (`Ctrl+R`) to preview changes.

### Build & Publish

```bash
npm install -g vsce  # Install VS Code Extension Manager
vsce package         # Generates .vsix file
vsce publish         # Publish to Marketplace (requires login)
```

---

## Contributing 🤝

Pull requests are welcome!

1. Fork the repository.
2. Create a branch: `git checkout -b feature/your-idea`.
3. Commit changes: `git commit -m 'Add amazing feature'`.
4. Push: `git push origin feature/your-idea`.
5. Open a PR with a detailed description.

---

## License 📜

MIT © [John Ellis](https://github.com/jaxellis)

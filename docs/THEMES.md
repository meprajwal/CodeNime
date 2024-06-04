`# Creating and Customizing Themes

## Folder Structure

Each theme should have the following structure:

theme_name
├── images
│ └── (optional images for the theme)
├── stickers
│ └── (optional stickers for the theme)
├── dark.json
└── light.json


## Adding a New Theme

1. **Create a New Folder**: 
   - Create a new folder under `themes` with your theme's name.

2. **Copy Base Structure**:
   - Copy the structure from the `base` theme folder.

3. **Customize JSON Files**:
   - Modify `dark.json` and `light.json` to match your theme's colors and styles.

4. **Add Images and Stickers** (optional):
   - Place any images or stickers in their respective subdirectories.

## Example

Here is an example structure for a new theme named `sanji_black_foot`:

sanji_black_foot
├── images
│ ├── icon.png
│ └── background.jpg
├── stickers
│ ├── sticker1.png
│ └── sticker2.png
├── dark.json
└── light.json


Ensure your JSON files are properly formatted and validated.

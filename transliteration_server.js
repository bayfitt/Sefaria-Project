const express = require('express');
const cors = require('cors');
const { transliterate } = require('hebrew-transliteration');

const app = express();
const PORT = 8001;

app.use(cors());
app.use(express.json());

app.post('/api/transliteration', (req, res) => {
    try {
        const { text, schema = 'sbl_academic' } = req.body;
        
        if (!text) {
            return res.status(400).json({
                success: false,
                error: 'Text is required'
            });
        }
        
        // Clean HTML entities and unwanted characters
        const cleanText = text
            .replace(/&nbsp;/g, ' ')           // Replace &nbsp; with spaces
            .replace(/&thinsp;/g, ' ')         // Replace thin spaces
            .replace(/\{[^}]*\}/g, '')         // Remove {ס} markers
            .replace(/\s+/g, ' ')              // Collapse multiple spaces
            .trim();
        
        console.log(`🔤 Original: ${text}`);
        console.log(`🧹 Cleaned: ${cleanText}`);
        
        // Replace vertical bar with placeholder before transliteration
        const textForTranslit = cleanText.replace(/׀/g, '__VERTICAL_BAR__');
        
        const result = transliterate(textForTranslit);
        
        // Replace placeholder with vertical bar in output
        const finalResult = result.replace(/__VERTICAL_BAR__/g, '|');
        
        console.log(`✅ Result: ${finalResult}`);
        
        res.json({
            success: true,
            original: text,
            cleaned: cleanText,
            transliterated: finalResult,
            schema: schema
        });
        
    } catch (error) {
        console.error('❌ Transliteration error:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Transliteration server running on http://localhost:${PORT}`);
});
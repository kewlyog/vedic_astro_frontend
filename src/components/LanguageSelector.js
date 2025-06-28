import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormControl, InputLabel, Select, MenuItem, Box, OutlinedInput, useTheme } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const theme = useTheme();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <LanguageIcon sx={{ color: 'white', mr: 1 }} />
      <InputLabel id="language-select-label" sx={{ color: 'white', mr: 1, minWidth: 110 }}>
        {t('select_language')}
      </InputLabel>
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <Select
          labelId="language-select-label"
          id="language-select"
          value={i18n.language}
          label={t('select_language')}
          onChange={handleChange}
          size="small"
          input={<OutlinedInput label={t('select_language')} />}
          sx={{
            color: '#4a148c',
            minWidth: 120,
            height: 40,
            background: 'rgba(255,255,255,0.95)',
            borderRadius: theme.shape.borderRadius,
            boxShadow: '0 2px 8px 0 rgba(40,20,60,0.10)',
            fontWeight: 400,
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
              transition: 'border-color 0.2s',
            },
            '&:hover': {
              fontWeight: 700,
              background: 'rgba(255,255,255,0.95)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: { background: 'white', color: '#4a148c' }
            }
          }}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="hi">हिन्दी</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanguageSelector; 
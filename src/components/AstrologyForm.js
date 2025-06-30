import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import {
  TextField, Button, Card, CardContent, Typography, CircularProgress, Alert,
  Box, Paper, Grid, IconButton, Snackbar
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const AstrologyForm = () => {
  const { t, i18n } = useTranslation();
  const [form, setForm] = useState({
    name: '',
    dob: '',
    tob: '',
    pob: '',
  });
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const resultRef = useRef(null);

  const isFormValid = form.name && form.dob && form.tob && form.pob;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setIsCopied(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult('');
    try {
      const apiUrl = `${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/astrology`;
      const res = await axios.post(apiUrl, {
        ...form,
        language: i18n.language,
      });
      setResult(res.data.result);
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (err) {
      setError(err.response?.data?.error || 'Error fetching astrology info');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center" alignItems="stretch" sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', width: '100%' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom align="center">
                {t('submit')}
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label={t('name')}
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  fullWidth
                  aria-required="true"
                />
                <TextField
                  label={t('dob')}
                  name="dob"
                  type="date"
                  value={form.dob}
                  onChange={handleChange}
                  required
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  aria-required="true"
                />
                <TextField
                  label={t('tob')}
                  name="tob"
                  type="time"
                  value={form.tob}
                  onChange={handleChange}
                  required
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  aria-required="true"
                />
                <TextField
                  label={t('pob')}
                  name="pob"
                  value={form.pob}
                  onChange={handleChange}
                  required
                  fullWidth
                  aria-required="true"
                />
                <Button type="submit" variant="contained" color="primary" disabled={!isFormValid || loading} sx={{ mt: 2 }} aria-busy={loading}>
                  {loading ? <CircularProgress size={24} color="inherit" /> : t('submit')}
                </Button>
              </Box>
              {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} ref={resultRef}>
          <Paper elevation={3} sx={{ height: '100%', width: '100%', p: 3, minHeight: 120, background: 'rgba(255,255,255,0.85)', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" gutterBottom>{t('result')}</Typography>
              {result && (
                <IconButton onClick={handleCopy} aria-label="Copy result">
                  <ContentCopyIcon />
                </IconButton>
              )}
            </Box>
            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
              {result || 'Astrology info will appear here after you submit the form.'}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Snackbar
        open={isCopied}
        autoHideDuration={3000}
        onClose={() => setIsCopied(false)}
        message="Copied to clipboard!"
      />
    </>
  );
};

export default AstrologyForm; 
app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({ message: 'File diunggah dengan sukses.' })

 
 
  });

  
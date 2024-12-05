// create an api endpoint dividing two numbers which coming in path params, validation and exception handling

app.get('/divide/:num1/:num2', (req, res) => {
  try {
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)

    if (isNaN(num1) || isNaN(num2)) {
      return res.status(400).json({error: 'Invalid Input'})
    }

    if(num2 === 0) return res.status(400).json({error: 'division not allowed with zero'})

    let result = num1 / num2

    return res.json({result})
  } catch (error) {
    res.status(500).json({error: 'An error occurred'})
  }
})



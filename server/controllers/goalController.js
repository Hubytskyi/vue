const asyncHandler = require('express-async-handler')

// @desc    Get goals
// @route   GET /api/goals
// @access  Privat
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Get goals'});
})

// @desc    Set goal
// @route   SET /api/goal
// @access  Privat
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  res.status(200).json({message: 'Set goal'});
})

// @desc    Update goal
// @route   PUT /api/goal/:id
// @access  Privat
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Update goal ${req.params.id}`});
})

// @desc    Delete goal
// @route   DELETE /api/goal/:id
// @access  Privat
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Delete goal ${req.params.id}`});
})

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal
}
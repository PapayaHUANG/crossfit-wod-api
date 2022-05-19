const DB = require('./db.json');

const getRecordForWorkout = (workoutId) => {
  try {
    const record = DB.records.find((record) => record.id === workoutId);
    if (!record) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
    return record;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = { getRecordForWorkout };

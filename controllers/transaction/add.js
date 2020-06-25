const { transaction } = require('../../models');
const { user } = require('../../models');
const moment = require('moment');

exports.create = async (req, res, next) => {
  try {
    const dataBody = req.body;
    let startDate = new Date();
    let dueDate = moment(startDate);
    const pendingDefault = 'Pending';
    dueDate.add(1, 'months');
    const trans = await transaction.create({ startDate: startDate, dueDate: dueDate, status: pendingDefault, ...dataBody });
    const { id } = trans;
    if (pendingDefault == 'Approved' || req.body.status == 'Approved') {
      await user.update(
        { subscribe: true },
        {
          where: { id: req.body.userId },
        },
      );
    }
    if (pendingDefault == 'Pending' || req.body.status == 'Pending') {
      await user.update(
        { subscribe: false },
        {
          where: { id: req.body.userId },
        },
      );
    }
    if (pendingDefault == 'Denied' || req.body.status == 'Denied') {
      await user.update(
        { subscribe: false },
        {
          where: { id: req.body.userId },
        },
      );
    }

    // add transaction
    const userdata = await transaction.findOne({
      where: { id: id },
      include: [
        {
          model: user,
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'userId', 'password'],
          },
        },
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'userId'],
      },
    });

    // res.send({ data: trans });
    return res.send({
      message: 'Transaction data successfully created',
      data: { transaction: userdata },
    });
  } catch (error) {
    return res.send({ error });
  }
};

// const { transaction } = require('../../models');
// const { user } = require('../../models');
// const moment = require('moment');

// exports.create = async (req, res, next) => {
//   try {
//     const dataBody = req.body;
//     let startDate = new Date();
//     let dueDate = moment(startDate);
//     const pendingDefault = 'Pending';
//     dueDate.add(1, 'months');

//     const trans = await transaction.upsert(
//       {
//         ...dataBody,
//         userId: dataBody.userId,
//         startDate: startDate,
//         dueDate: dueDate,
//         status: pendingDefault,
//       },
//       {
//         where: { userId: dataBody.userId },
//       },
//     );

//     console.log(trans);

//     // const { id } = trans;
//     // logic update subscribe
//     if (pendingDefault == 'Approved' || req.body.status == 'Approved') {
//       await user.update(
//         { subscribe: true },
//         {
//           where: { id: req.body.userId },
//         },
//       );
//     }
//     if (pendingDefault == 'Pending' || req.body.status == 'Pending') {
//       await user.update(
//         { subscribe: false },
//         {
//           where: { id: req.body.userId },
//         },
//       );
//     }
//     if (pendingDefault == 'Denied' || req.body.status == 'Denied') {
//       await user.update(
//         { subscribe: false },
//         {
//           where: { id: req.body.userId },
//         },
//       );
//     }

//     // add transaction
//     const userdata = await transaction.findOne({
//       where: { id: req.body.id },
//       include: [
//         {
//           model: user,
//           attributes: {
//             exclude: ['createdAt', 'updatedAt', 'userId', 'password'],
//           },
//         },
//       ],
//       attributes: {
//         exclude: ['createdAt', 'updatedAt', 'userId'],
//       },
//     });

//     // res.send({ data: trans });
//     return res.send({
//       message: 'Transaction data successfully created',
//       data: { transaction: userdata },
//     });
//   } catch (error) {
//     return res.send({ error });
//   }
// };

/**
 * Created by solax on 2016-12-7.
 */
var messagePipeline = {
  ACTIVE : 'active' // Ĭ��Ϊactive
};

var connect = {
  RECONNECT : 'reconnect'
};

var room = {
  join  : 'join room',
  leave : 'leave room'
};

var constants = {
  MESSAGE_PIPELINE : messagePipeline, // ��Ϣ�ܵ�����
  CONNECT : connect,
  ROOM : room
};

module.exports = constants;
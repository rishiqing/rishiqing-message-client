# rishiqing-message-client
������webSocket���Ϳͻ��˴���


��װ
-----
<pre>
npm install rishqiing-message-client
</pre>


ʹ��˵��
-----
// commonJs����
<pre>
// node import method
var Client = require('rishiqing-message-client');
</pre>

webpack����
<pre>
// webpack import method
import Client     from 'rishiqing-message-client';
</pre>

��������
<pre>
var client = new Client('http://localhost:1717')
client.init({
    onConnection:function () { ? // ���ӳɹ�
        console.log('connection success');
    },
    onActive : function (data) { // �յ���Ϣ
        console.log('recevice data : %o', data);
    },
    reconnection : function () { // ��������
        console.log('reconnection success');
    }
});
</pre>

���뷿��
<pre>
client.joinRoom(roomId);
</pre>


�˳�����
<pre>
client.leaveRoom(roomId);
</pre>




���������ֱ��ʹ��
-----

����
<pre>
https://github.com/rishiqing/rishiqing-message-client/blob/master/build/bundle.js
</pre>

����
<pre>
&lt;script type="text/javascript" src="./rishiqing-message-client/build/bundle.js"/&gt;
var client  = new RsqMessgeClient('http://localhost:1717');
</pre>






��ע
-----
����

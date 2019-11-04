<?php namespace App\Services;

class AliyunOss
{
    protected $_accessKeyId;
    protected $_accessKeySecret;
    protected $_endpoint;
    protected $_callbackUrl;
    protected $_bucket;
    protected $_cdnEndpoint;
    
    public function __construct( $accessKeyId, $accessKeySecret, $endpoint, $callbackUrl, $bucket, $cdnEndpoing = null){
        $this->_accessKeyId = $accessKeyId;
        $this->_accessKeySecret = $accessKeySecret;
        $this->_endpoint = $endpoint;
        $this->_callbackUrl = $callbackUrl;
        $this->_bucket = $bucket;
        $this->_cdnEndpoint = $cdnEndpoing;
    }
    
    protected function gmt_iso8601($time) {
        $dtStr = date("c", $time);
        $mydatetime = new \DateTime($dtStr);
        $expiration = $mydatetime->format(\DateTime::ISO8601);
        $pos = strpos($expiration, '+');
        $expiration = substr($expiration, 0, $pos);
        return $expiration."Z";
    }
    
    /**
     *
     * @param unknown $fullname 文件名全称 包含路径
     */
    public function getClientPolicy(){
    
    
        $callback_param = array('callbackUrl'=>$this->_callbackUrl,
            'callbackBody'=>'object=${object}&size=${size}&mimeType=${mimeType}&height=${imageInfo.height}&width=${imageInfo.width}',
            'callbackBodyType'=>"application/x-www-form-urlencoded");
        $callback_string = json_encode($callback_param);
    
        $base64_callback_body = base64_encode($callback_string);
        $now = time();
        $expire = 300; //设置该policy超时时间是300s. 即这个policy过了这个有效时间，将不能访问
        $end = $now + $expire;
        $expiration = $this->gmt_iso8601($end);
    
//         $dir = 'user';
    
        $conditions = [
            [ 'content-length-range', 0 , 1048576000 ],  //最大文件大小.用户可以自己设置
            //[ 'starts-with', '$key', $fullname], //表示用户上传的数据,必须是以$dir开始, 不然上传会失败,这一步不是必须项,只是为了安全起见,防止用户通过policy上传到别人的目录
        ];
    
        $arr = array('expiration'=>$expiration,'conditions'=>$conditions);
        $policy = json_encode($arr);
        $base64Policy = base64_encode($policy);
        $string2Sign = $base64Policy;
    
        $response = [
            'accessid' => $this->_accessKeyId,
            'host' => $this->getUploadEndPoint(),
            'policy' => $base64Policy,
            'signature' => base64_encode(hash_hmac('sha1', $string2Sign, $this->_accessKeySecret, true)),
            'expire' => $end,
            'callback' => $base64_callback_body,
        ];
    
        //这个参数是设置用户上传指定的前缀
        return $response;
    }
    
    public function getUploadEndPoint(){
        return 'http://'. $this->_bucket . '.' . $this->_endpoint;
    }
    
    public function getViewUrl($object){
        if($this->_cdnEndpoint){
            return $this->_cdnEndpoint . '/' . $object;
        }else{
            return $this->getUploadEndPoint() . '/' . $object;
        }
    }
}


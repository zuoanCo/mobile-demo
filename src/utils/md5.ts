const md5 = async (str: string) => {
    const msgUint8: Uint8Array = new TextEncoder().encode(str) // 编码为（utf-8）Uint8Array
    const hashBuffer: ArrayBuffer = await crypto.subtle.digest('SHA-1', msgUint8) // 计算消息的哈希值
    const hashArray: number[] = Array.from(new Uint8Array(hashBuffer)) // 将缓冲区转换为字节数组
    const hashHex: string = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('') // 将字节数组转换为十六进制字符串
    return hashHex;
}
  
export default md5;


function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) {

if(other.gameObject.tag == "AI"){
Application.LoadLevel(0);
}

}
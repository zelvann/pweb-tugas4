function check() {
  const cnama = document.getElementById("nama");
  const cnrp = document.getElementById("NRP");
  const cmk = document.getElementById("matkul");
  const cd = document.getElementById("dosen");
  const enama = document.getElementById("nameError");
  const enrp = document.getElementById("nrpError");
  const emk = document.getElementById("mkError");
  const ed = document.getElementById("dError");

  enama.textContent = "";
  enrp.textContent = "";
  emk.textContent = "";
  ed.textContent = "";

  let good = true;
  if(cnama.value.trim() === "") {
    enama.textContent = "Nama tidak boleh kosong";
    good = false;
  }
  if(cnrp.value.trim() === "") {
    enrp.textContent = "NRP tidak boleh kosong";
    good = false;
  }
  if(cmk.value.trim() === "") {
    emk.textContent = "Mata kuliah tidak boleh kosong";
    good = false;
  }
  if(cd.value.trim() === "") {
    ed.textContent = "Nama Dosen tidak boleh kosong";
    good = false;
  }
  if(good) {
    alert("Form telah sukses disubmit");
  }
}
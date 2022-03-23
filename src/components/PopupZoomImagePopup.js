import Popup from "./Popup";

//Класс zoomImagePopup, при нажатии на картинку, происходит увеличение
// (через ключевое слово создали новый класс)
export default class PopupZoomImagePopup extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imageText = this._popup.querySelector('.popup__caption');
        this._zoomedImagePopup= this._popup.querySelector('.popup__image');
    }

    openPopup() {
        super.openPopup();
        this._imageText.textContent = this._name;
        this._zoomedImagePopup.alt = this._name;
        this._zoomedImagePopup.src = this._link;
    }
}
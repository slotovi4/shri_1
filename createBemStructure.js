const create = require('bem-tools-create');
const _bemPath = 'app/bem/';
const common = _bemPath + 'common/';
const desktop = _bemPath + 'desktop/';
const touch = _bemPath + 'touch/';

/* 
 * header       -> Header
 * header__link -> Header-Link
 * header_hide  -> Header_hide
*/


/* Common: общие(глобальные) компоненты  */

//Header
create(common + 'Header.css');
create(common + 'Header-Logo.css');
create(common + 'Header-Link.css');
create(common + 'Header-Link_active.css');
create(common + 'Header-Menu.css');
create(common + 'Header-Menu_show.css');
//Footer
create(common + 'Footer.css');
create(common + 'Footer-Text.css');
//Event
create(common + 'Event.css');
create(common + 'Event_size_s.css');
create(common + 'Event_size_m.css');
create(common + 'Event_size_l.css');
create(common + 'Event_type_info.css');
create(common + 'Event_type_critical.css');
create(common + 'Event-Icon.css');
create(common + 'Event-Title.css');
create(common + 'Event-Source.css');
create(common + 'Event-Time.css');
create(common + 'Event-Desc.css');
create(common + 'Event-Image.css');
create(common + 'Event-Image_hide.css');
create(common + 'Event-Temperature.css');
create(common + 'Event-Humidity.css');
create(common + 'Event-Close.css');
create(common + 'Event-Close_type_info.css');
create(common + 'Event-Close_type_critical.css');
create(common + 'Event-Continue.css');
//EventSystem
create(common + 'EventSystem.css');
//EventMusic
create(common + 'EventMusic.css');
create(common + 'EventMusic_hide.css');
create(common + 'EventMusic-Image.css');
create(common + 'EventMusic-Name.css');
create(common + 'EventMusic-Track.css');
create(common + 'EventMusic-Time.css');
//EventMusicTracker
create(common + 'EventMusicTracker.css');
//EventMusicControlls
create(common + 'EventMusicControlls.css');
create(common + 'EventMusicControlls-Prev.css');
create(common + 'EventMusicControlls-Next.css');
create(common + 'EventMusicControlls-Volume.css');
create(common + 'EventMusicControlls-VolumeValue.css');
//EventInfo
create(common + 'EventInfo.css');
create(common + 'EventInfo_hide.css');
//EventHeader
create(common + 'EventHeader.css');
//EventClimate
create(common + 'EventClimate.css');
create(common + 'EventClimate_hide.css');
//EventCam
create(common + 'EventCam.css');
create(common + 'EventCam-Image.css');
create(common + 'EventCam-Image_hide.css');
//EventCamInfo
create(common + 'EventCamInfo.css');
create(common + 'EventCamInfo_hide.css');
create(common + 'EventCamInfo-Zoom.css');
create(common + 'EventCamInfo-Bright.css');
//EventButtons
create(common + 'EventButtons.css');
create(common + 'EventButtons_hide.css');
create(common + 'EventButtons-Button.css');
create(common + 'EventButtons-Button_active.css');
create(common + 'EventButtons-Button_inactive.css');
//Container
create(common + 'Container.css');
create(common + 'Container-Title.css');
create(common + 'Container-Video.css');
//CanvVideoBlock
create(common + 'CanvVideoBlock.css');
create(common + 'CanvVideoBlock-CanvasMove.css');
create(common + 'CanvVideoBlock-Info.css');
create(common + 'CanvVideoBlock-Video.css');
create(common + 'CanvVideoBlock-Text.css');
create(common + 'CanvVideoBlock-Luminance.css');
create(common + 'CanvVideoBlock-Contrast.css');
create(common + 'CanvVideoBlock-Button.css');
create(common + 'CanvVideoBlock-Button_open.css');
create(common + 'CanvVideoBlock-CanvasBlock.css');
create(common + 'CanvVideoBlock-CanvasBlock_open.css');
create(common + 'CanvVideoBlock-ControllBlock.css');
create(common + 'CanvVideoBlock-ControllBlock_open.css');
create(common + 'CanvVideoBlock-SoundVolume.css');
create(common + 'CanvVideoBlock-SoundVolume_active.css');
create(common + 'CanvVideoBlock-SoundMute.css');
create(common + 'CanvVideoBlock-SoundMute_active.css');



/* Desktop */


/* Touch */

//HeaderMobileBtn
create(touch + 'HeaderMobileBtn.css');
create(touch + 'HeaderMobileBtn-Line.css');
create(touch + 'HeaderMobileBtn-Line_close.css');
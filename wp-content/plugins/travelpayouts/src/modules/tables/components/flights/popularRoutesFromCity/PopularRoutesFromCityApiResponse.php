<?php
/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */

namespace Travelpayouts\modules\tables\components\flights\popularRoutesFromCity;

use Travelpayouts\components\formatters\PriceFormatter;
use Travelpayouts\modules\tables\components\api\travelpayouts\v1\cityDirections\CityDirectionApiResponse;

class PopularRoutesFromCityApiResponse extends CityDirectionApiResponse
{
    /**
     * @var Table
     */
    public $shortcodeModel;

    public function buttonVariables(): array
    {
        return [
            'price' => function () {
                return PriceFormatter::getInstance()->format($this->price, $this->shortcodeModel->currency);
            },
        ];
    }

    public function getFullFlightNumber(): string
    {
        return $this->airline . ' ' . $this->flight_number;
    }

}

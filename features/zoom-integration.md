# Zoom Integration

Tabtastic provides an integration with [Zoom](https://zoom.us/) Virtual Meetings to make it easier to generate Zoom meetings to hold debates in for your tournament. It provides two methods of automatically generating breakout rooms based on the draw for a round, as well as meeting scheduling and link distribution. This integration has been tested in both modes at enormous tournaments including online majors like Belgrade WUDC, McGill NAUDC and Nepal Australs, so has been proven to be very reliable for rapidly creating Zoom meetings at large tournaments, even when coordinating 7+ Zoom accounts and allocating over 350 teams.

## Requirements

* A paid Zoom account
* Enabling 'Breakout room - Meetings' and 'Assign participants to breakout rooms when scheduling' in Zoom [account settings](https://zoom.us/profile/setting)
* An up-to-date Zoom client
* Someone to host the Zoom meeting

::: warning
Although different Zoom plans can have different capacities, Tabtastic can only ever automatically allocate a maximum of 200 participants due to [limitations imposed by Zoom](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_94a5b1d6-4d7d-47e7-aa09-99d5e03bcaa4). If have more than 200 participants in a Zoom meeting, Tabtastic may not be able to create all of your breakout rooms, which can result in missing rooms.
:::

::: tip
Breakout room allocations only work if users sign in to Zoom with the emails provided, a good way to help ensure this is to enable 'Require authentication to join' when scheduling meetings to force participants to be signed in to Zoom. Tabtastic will enable this setting for you if it is scheduling the Zoom meetings.
:::

## Set Up

There are two ways you can set up Tabtastic's Zoom integration, and you can also mix-and-match the two methods. Selecting 'Automatic Zoom' will allow Tabtastic to handle scheduling the meetings and retrieving their join links for you, and is the recommended way to use Zoom with Tabtastic, but may not work if you are using an Education or Enterprise Zoom account with restrictions. Selecting 'Manual or Zoom CSV' will require you to schedule the meetings and input the join links into Tabtastic yourself, but will provide you with a file you can use for automatic allocations and is compatible with all Zoom accounts.

To set up the Zoom integration you can go to the Allocations pane of your tournament's Settings page. On this page you can see the currently configured 'Buildings', which are how Tabtastic groups rooms for assigning them to specific meetings. To add a building, you need to select the Room Category that contains the rooms you want to use for your building, and select whether you want to use 'Automatic Zoom' mode or 'Manual or Zoom CSV' mode. You can also add a comment to help identify or describe the building. If you pick 'Automatic Zoom', you will also need to connect a Zoom account by clicking on 'Authorise' next to each building, after you have saved your settings.

You can delete buildings by clicking the delete button, and you can change which Zoom account a building is connected to by clicking 'Authorise' again. If you change the rooms in a building, you may need to [Update your tab data](/features/updater) or draws might fail.

::: warning
You cannot use the same Zoom account for multiple different meetings. If you try to do so, you will enter a loop where when one meeting starts it will end the other and vice-versa.
:::

## Draw

The necessary steps during the Draw will depend on what mode you are using. For buildings using 'Automatic Zoom', you won't need to take any additional steps during the draw process, Tabtastic will fully handle scheduling the Zoom meeting, assigning the breakout rooms and retrieving the join link for these buildings.

For buildings using 'Manual or Zoom CSV', Tabtastic will generate a CSV (spreadsheet) file compatible with Zoom which contains the breakout room allocations for that building. The meeting host will then need to download the allocation file, [schedule a Zoom meeting](https://zoom.us/meeting/schedule), enable 'Breakout Room pre-assign' under the 'Options' toggle at the bottom of the scheduling page and click 'Import from CSV'. Then, you can drag and drop the allocation file into the pop-up and the room allocations for the building will automatically appear. Click 'Save' at the bottom of the pop-up, and then click 'Save' to save the meeting. Zoom will then take you to the meeting's detail page, where you can copy the join link and input it into Tabtastic. If you are using Discord to draw the round, you will need to use the `/meeting <building> <link>` command, where `<building>` is the name of your building and `<link>` is the Zoom meeting link, for example `/meeting Doghouse https://us001.zoom.us/j/12345678910?pwd=j5SQ43hSpP4QtrtL9CUeqOajAJwfTXy3`. If you are using the website to draw the round, you will be prompted for the link for the building.

Once the round has been drawn, each meeting will need to be started by its host so that participants can begin joining it, and the meeting host will need to open the breakout rooms by clicking on the 'Breakout Rooms' button at the bottom of the screen and clicking 'Open All Rooms'. Zoom will only display the allocations of participants who have joined the meeting, but will continue to automatically allocate participants after you have opened the breakout rooms as they join or rejoin the meeting.

::: tip
You can also enable 'Allow participants to choose room' by clicking the cog in the breakout rooms window before clicking 'Open All Rooms' to allow participants to move themselves between rooms freely. This can be very helpful for judge swaps, or when participants provide the incorrect email and cannot be automatically allocated.
:::

## Unlinking your Zoom Account

There are two ways you can unlink a Zoom account from a building using 'Automatic Zoom' mode:

* You can delete the building entirely
* You can click 'Authorise' and link a different Zoom account to the building

With either method, you will need to save your settings afterwards to keep your changes.

You can also remove the Tabtastic integration via the Zoom marketplace, however this will leave your building in an invalid state, and you will still need to delete the building or reconfigure it to draw a round.

1. Login to your Zoom Account and navigate to the Zoom App Marketplace.
2. Click Manage > Installed Apps.
3. Click the Tabtastic Scheduler app.
4. Click Uninstall.

::: warning
If you have a building in an invalid state from removing the integration in this way, drawing the round will fail until you connect a new Zoom account or remove the building.
:::
